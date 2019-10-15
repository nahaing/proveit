import React, { Component } from "react";

class VerifyTab extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3
          style={{
            color: "#6F706F",
            fontFamily: "Proxima Nova",
            fontWeight: "800"
          }}
        >
          Verify your document on the blockchain
        </h3>
        <div class="row mt-5">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <span
              style={{ fontWeight: "600", fontSize: "18px", color: "#6F706F" }}
            >
              Drag and drop your document here, or choose a file. <br />
              Your file will not be uploaded.{" "}
              <a href="#" style={{ color: "#17BCDE", textDecoration: "none" }}>
                Learn more.
              </a>
            </span>
            <div class="mt-4">
              <input
                type="file"
                id="fileInput"
                name="selectedFile"
                style={{ display: "none" }}
                class="inputfile inputfile-6"
                data-multiple-caption="{count} files selected"
                multiple
              />
              <label
                for="fileInput"
                class="btn btn-lg w-50"
                style={{
                  backgroundColor: "#F9F7F7",
                  padding: "2%",
                  border: "2px solid #D4D1D0",
                  color: "#969696",
                  fontFamily: "Proxima Nova",
                  fontSize: "20px",
                  display: "inline-block",
                  borderRadius: "14px",
                  marginTop: "16px",
                  cursor: "pointer"
                }}
              >
                BROWSE A File...
              </label>
            </div>
            <div class="mt-2">
              <span
                style={{
                  fontFamily: "Proxima Nova",
                  fontWeight: "400",
                  color: "#BDBEBE"
                }}
              >
                Report.pdf
              </span>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <h2
              style={{
                color: "#6F706F",
                fontFamily: "Proxima Nova",
                fontWeight: "800"
              }}
            >
              Input a Document Hash
            </h2>
            <span
              style={{
                fontFamily: "Proxima Nova",
                fontWeight: "400",
                fontSize: "16px",
                color: "#6F706F",
                marginLeft: "10px"
              }}
            >
              Input the SHA256 checksum hexadecimal digest for your file here.
            </span>
            <div style={{ padding: "4% 4% 4% 6%" }}>
              <input
                style={{ borderRadius: "10px", fontSize: "30px" }}
                class="form-control form-control-lg"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
          <div
            class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8"
            style={{ padding: "0% 6% 0% 6%" }}
          >
            <button
              class="mt-4 mb-5 btn"
              style={{
                backgroundColor: "#ffffff",
                width: "100%",
                color: "#1A72A1",
                borderRadius: "8px",
                fontSize: "25px",
                padding: "3%",
                fontFamily: "Proxima Nova",
                border: "3px solid #1A72A1"
              }}
            >
              Verify
            </button>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
        </div>
      </React.Fragment>
    );
  }
}

export default VerifyTab;
