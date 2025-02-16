import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useMutation } from "@apollo/client";
import { CREATE_TRAVEL_PRODUCT, UPLOAD_FILE } from "./queries";
import { checkValidationFile } from "@/commons/utils/check-file";
import { UpdateTravelproductDocument } from "@/commons/graphql/graphql";

const useMarketServiceWirte = (props) => {
  const params = useParams();
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [createTravelproduct] = useMutation(CREATE_TRAVEL_PRODUCT);
  const [updateTravelproduct] = useMutation(UpdateTravelproductDocument);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [isZipCodeModalOpen, setIsZipCodeModalOpen] = useState(false);
  const [inputTag, setInputTag] = useState("");

  const methods = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      remarks: "",
      contents: "",
      price: null,
      tags: [],
      images: [],
    },
  });

  const defaultData = props.data?.fetchTravelproduct;
  useEffect(() => {
    // props.data가 로딩된 후 초기값으로 설정
    if (!props.data) return;
    methods.reset({
      name: defaultData.name || "",
      remarks: defaultData.remarks || "",
      contents: defaultData.contents || "",
      price: defaultData.price || 0,
      images: defaultData.images || [],
      tags: defaultData.tags || [],
    });
    // 태그 초기값 넣어주기
    methods.trigger();
  }, [props.data, methods]);

  // 웹 에디터 입력 값 setValue해주기
  const onChangeContents = (value) => {
    // 빈 콘텐츠의 경우 빈 문자열로 설정
    const sanitizedContent = ["<p><br></p>", "<div><br></div>"].includes(value)
      ? ""
      : value;

    // 값 설정 후 검증
    methods.setValue("contents", sanitizedContent);
    methods.trigger("contents"); // 검증 트리거
  };

  // zipcode modal 토글 함수
  const onToggleZipCodeModal = () => {
    setIsZipCodeModalOpen((prev) => !prev);
  };

  const onChangeTag = (event) => {
    setInputTag(event.target.value);
  };

  // 입력한 태그 tags state 배열에 넣어주기
  const addTag = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // !event.nativeEvent.isComposing => 입력이 완료 되었으면
      // keydown의 한글 중복 문제 해결!!
      const currentTags = methods.getValues("tags");
      if (inputTag.trim() !== "" && !event.nativeEvent.isComposing) {
        methods.setValue("tags", [...currentTags, inputTag]);
        setInputTag(""); // 인풋 초기화
      }
    }
  };

  // 태그 삭제
  const removeTag = (removeId) => {
    console.log("removeId", removeId);
    const currentTags = methods.getValues("tags");
    methods.setValue(
      "tags",
      currentTags.filter((_, index) => index !== removeId)
    );
  };
  console.log("tag", methods.getValues("tags"));

  // file버튼 클릭해주기
  const onClickImage = () => {
    fileRef.current?.click();
  };

  const images = methods.watch("images");
  // 이미지업로드버튼 클릭 시
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    // 검증 실패시 OnChangeFile함수 즉시 종료
    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });

    const fileUrl = result?.data?.uploadFile?.url;
    if (!fileUrl) return;

    const currentImages = methods.getValues("images") || [];

    methods.setValue("images", [...currentImages, fileUrl]);
  };

  // delete버튼 클릭 시 이미지 미리보기 삭제
  const onClickDelete = (event: MouseEvent<HTMLImageElement>) => {
    const imageId = event.currentTarget.id;
    // 이미지 삭제
    const deletedImage = images.filter((_, index) => index !== Number(imageId));
    methods.setValue("images", deletedImage);
  };

  const onClickSubmit = async (data) => {
    console.log("data", data);
    if (!props.isEdit) {
      try {
        const result = await createTravelproduct({
          variables: {
            createTravelproductInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: data.price,
              tags: data.tags,
              images: data.images,
            },
          },
        });
        const navigationToDetail = () => {
          router.push(`/market/${result?.data?.createTravelproduct?._id}`);
        };
        alert("서비스 등록 완료");
        navigationToDetail();
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const result = await updateTravelproduct({
          variables: {
            updateTravelproductInput: {
              name: data.name,
              remarks: data.remarks,
              contents: data.contents,
              price: data.price,
              tags: data.tags,
              images: data.images,
            },
            serviceId: params.serviceId as string,
          },
        });
        console.log(result);
        router.push(`/market/${params.serviceId as string}`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onClickCancel = () => {
    router.push("/market");
  };

  return {
    isZipCodeModalOpen,
    inputTag,
    fileRef,
    images,
    methods,
    onToggleZipCodeModal,
    onChangeContents,
    onChangeTag,
    addTag,
    removeTag,
    onChangeFile,
    onClickImage,
    onClickDelete,
    onClickSubmit,
    onClickCancel,
  };
};

export default useMarketServiceWirte;
