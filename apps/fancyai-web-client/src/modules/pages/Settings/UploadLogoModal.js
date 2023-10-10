import { Modal, Form, Input, Upload, Image } from "antd";
import FloatLabel from "@crema/modules/components/floatLabel";
import { StyledDivider, StyledFormBtn, StyledSelect } from "./index.styled";
import IntlMessages from "@crema/helpers/IntlMessages";
import { useInviteTeamMemberMutation } from "apps/fancyai-web-client/src/core/api/apiTeamMembers";
import { useAppAuth } from "@crema/context/AppAuthProvider";
import { CloudUploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useDropzone } from "react-dropzone";
import { useMemo, useState } from "react";
import { useGetS3PresignedUrlMutation } from "apps/fancyai-web-client/src/core/api";
import { useUpdateCompanySettingMutation } from "apps/fancyai-web-client/src/core/api/apiCompanySetting";
import axios from "axios";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 1,
  borderRadius: 2,
  borderColor: "#384EB74D",
  borderStyle: "dashed",
  backgroundColor: "#F8F8FF",
  color: "#0F0F0F",
  outline: "none",
  transition: "border .24s ease-in-out",
  marginBottom: 24,
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const UploadLogoModal = ({ isShowModal, handleCloseModal, companyInfo }) => {
  const [form] = Form.useForm();
  const name = Form.useWatch("name", form);
  const email = Form.useWatch("email", form);
  const role = Form.useWatch("role", form);
  const { selectedCompanyId } = useAppAuth();
  const [getS3PresignedUrl] = useGetS3PresignedUrlMutation();
  const [updateCompanySetting] = useUpdateCompanySettingMutation();

  const [companyImage, setCompanyImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: (acceptedFiles) => {
      setCompanyImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject]
  );

  const handleUpload = async () => {
    if (acceptedFiles?.length) {
      const avatarFile = acceptedFiles[0];
      setIsUploading(true);
      const res = await getS3PresignedUrl({
        fileName: avatarFile.name.split(".")?.[0],
        fileType: avatarFile.name.split(".")?.[1] ?? "",
      });
      if (res?.data?.data) {
        const { signedRequest } = res.data.data;
        const reader = new FileReader();
        reader.readAsArrayBuffer(avatarFile);

        reader.onload = () => {
          const data = reader.result;
          axios.put(`${signedRequest}`, data);
        };
        const logo = signedRequest.split("?")?.[0];
        updateCompanySetting?.({
          ...companyInfo,
          logo,
          companyId: selectedCompanyId,
        })
          .unwrap()
          .then((result) => {
            getUser()
              .unwrap()
              .catch(() => {});
          })
          .catch((err) => console.error(err));
      }
    }
    setIsUploading(false);
    handleCloseModal();
  };

  return (
    <Modal
      title="Company logo upload"
      open={isShowModal}
      onCancel={handleCloseModal}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <StyledDivider />
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div
          className="ant-upload-drag-icon"
          style={{ marginBottom: 16, marginTop: 4 }}
        >
          {companyImage ? (
            <Image
              src={companyImage}
              width={80}
              height="auto"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="60"
              viewBox="0 0 70 60"
              fill="none"
            >
              <path
                d="M36.7608 14.7727L36.6698 14.746C36.1978 14.6077 35.925 14.1179 36.0674 13.6486C36.0674 13.6486 36.0674 13.6486 36.0674 13.6486L36.2109 13.6921L36.7608 14.7727ZM36.7608 14.7727L36.7647 14.7684M36.7608 14.7727L36.7647 14.7684M36.7647 14.7684C37.2077 14.8484 37.6502 14.5887 37.7817 14.1526L36.7647 14.7684Z"
                fill="#0078CC"
                stroke="#F9FFF9"
                stroke-width="0.3"
              />
              <path
                d="M57.3407 42.4384H52.8727C52.4616 42.4384 52.128 42.1107 52.128 41.7067C52.128 41.3027 52.4615 40.9749 52.8727 40.9749H57.3407C63.4997 40.9749 68.5109 36.0509 68.5109 29.999C68.5109 23.9471 63.4997 19.023 57.3407 19.023H57.2333C57.0173 19.023 56.812 18.9311 56.6705 18.7706C56.529 18.6101 56.4652 18.3974 56.4961 18.1873C56.5626 17.7315 56.5961 17.2737 56.5961 16.8279C56.5961 11.5829 52.2529 7.31531 46.9152 7.31531C44.8386 7.31531 42.8583 7.95296 41.188 9.15978C40.821 9.42478 40.2997 9.30718 40.0875 8.91047C35.3572 0.0596993 23.0022 -1.12887 16.5968 6.57053C13.8984 9.81417 12.8382 14.0336 13.6878 18.146C13.7814 18.6002 13.4277 19.0236 12.958 19.0236H12.6596C6.50062 19.0236 1.48943 23.9477 1.48943 29.9996C1.48943 36.0514 6.50062 40.9755 12.6596 40.9755H17.1276C17.5388 40.9755 17.8723 41.3032 17.8723 41.7072C17.8723 42.1113 17.5388 42.439 17.1276 42.439H12.6596C5.67925 42.439 0 36.8585 0 29.9995C0 23.3329 5.36483 17.8742 12.075 17.5731C11.4447 13.3066 12.65 9.00295 15.4436 5.64437C22.3015 -2.5996 35.4443 -1.67556 41 7.51707C42.7724 6.42522 44.8005 5.85244 46.9149 5.85244C53.3819 5.85244 58.5064 11.261 58.058 17.58C64.7064 17.9463 70 23.3763 70 29.999C70 36.8585 64.3207 42.4384 57.3404 42.4384L57.3407 42.4384Z"
                fill="#0078CC"
              />
              <path
                d="M16.1352 41.2935C16.1352 51.4659 24.5565 59.737 34.9023 59.737C45.2483 59.737 53.6695 51.4658 53.6695 41.2935C53.6695 31.1211 45.2483 22.85 34.9023 22.85C24.5564 22.85 16.1352 31.1212 16.1352 41.2935ZM17.9249 41.2935C17.9249 32.099 25.5386 24.6138 34.9023 24.6138C44.2659 24.6138 51.8798 32.0989 51.8798 41.2935C51.8798 50.4879 44.2659 57.9732 34.9023 57.9732C25.5387 57.9732 17.9249 50.488 17.9249 41.2935Z"
                fill="#0078CC"
                stroke="#F9FFF9"
                stroke-width="0.3"
              />
              <path
                d="M34.5414 48.6577C34.5414 49.0388 34.8552 49.3434 35.2366 49.3434C35.6179 49.3434 35.9318 49.0392 35.9318 48.6577V34.7291C35.9318 34.348 35.618 34.0434 35.2366 34.0434C34.8552 34.0434 34.5414 34.348 34.5414 34.7291V48.6577Z"
                fill="#0078CC"
                stroke="#0078CC"
                stroke-width="0.3"
              />
              <path
                d="M39.1057 39.5021C39.2415 39.6355 39.4196 39.702 39.5964 39.702L31.3642 39.502L35.2349 35.6985L39.1057 39.5021ZM30.3828 39.5021C30.654 39.7686 31.093 39.7688 31.3641 39.5021L34.7442 34.2448L34.7441 34.2449L30.3828 38.5305C30.1099 38.7985 30.1099 39.234 30.3828 39.5021Z"
                fill="#0078CC"
                stroke="#0078CC"
                stroke-width="0.3"
              />
            </svg>
          )}
        </div>
        <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
          Drag & drop files or{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "#0078CC",
            }}
          >
            Browse
          </span>
        </p>
        <p style={{ color: "#676767", fontSize: 12 }}>
          Supported formates: JPEG, PNG,SVG
        </p>
      </div>
      <StyledFormBtn
        loading={isUploading}
        disabled={isUploading}
        type="primary"
        htmlType="submit"
        onClick={handleUpload}
      >
        <IntlMessages id="common.confirm_upload" />
      </StyledFormBtn>
      <StyledFormBtn
        disabled={isUploading}
        htmlType="button"
        onClick={handleCloseModal}
      >
        <IntlMessages id="common.cancel" />
      </StyledFormBtn>
    </Modal>
  );
};

export default UploadLogoModal;
