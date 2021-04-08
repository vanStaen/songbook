import { useEffect } from "react";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { observer } from "mobx-react";

import { ConditionalWrapper } from "../../../helpers/ConditionnalWrapper";
// import { getUser } from "../Profil/getUser";
import { userStore } from "../../../stores/userStore";

import "./ProfilButton.css";

export const ProfilButton = observer((props) => {
  useEffect(() => {
    //getUser();
  }, []);

  return (
    <ConditionalWrapper
      condition={props.showPage === "book"}
      wrap={(children) => (
        <Tooltip placement="left" title="Profil">
          {children}
        </Tooltip>
      )}
    >
      {props.showPage === "profil" ? (
        <div
          className="ProfilButton__float"
          onClick={() => props.setShowPage("book")}
        >
          <CloseOutlined className="ProfilButton__close" />
        </div>
      ) : userStore.picUrl ? (
        <div
          className="ProfilButton__float"
          style={{
            backgroundImage: `url(${userStore.picUrl})`,
            backgroundSize: "cover",
          }}
          onClick={() => props.setShowPage("profil")}
        ></div>
      ) : (
        <div
          className="ProfilButton__float ProfilButton__background"
          onClick={() => props.setShowProfil(true)}
        >
          <UserOutlined className="ProfilButton__icon" />
        </div>
      )}
    </ConditionalWrapper>
  );
});
