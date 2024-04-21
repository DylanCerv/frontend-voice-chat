import React from "react";
import "./ContainerForm.css";
import { Link } from "react-router-dom";
import TextChangePageForm from "../TextChangePageForm/TextChangePageForm";

export default function ContianerForm({
  children,
  title,
  onSubmit,
  textButton,
  textFooter,
  linkFooter,
  textLinkFooter,
}) {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <Link to={"/"} className="absolute top-10 left-10 btn bg-gradient-to-r from-blue-500 to-teal-400  text-white">Pagina Principal</Link>
          <form onSubmit={onSubmit}>
            <span class="login100-form-title p-b-26">{title}</span>
            <span class="login100-form-title p-b-48">
              <i class="zmdi zmdi-font"></i>
            </span>

            {children}
            
            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn">
                <div class="login100-form-bgbtn"></div>
                <button class="login100-form-btn">{textButton}</button>
              </div>
            </div>

            <TextChangePageForm
              text={textFooter}
              link={linkFooter}
              textLink={textLinkFooter}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
