import React, { Component } from "react";

class CreateTab extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3
          style={{
            color: "#050607",
            fontFamily: "Proxima Nova",
            fontWeight: "400"
          }}
        >
          Record your document hash on the blockchain
        </h3>
        <span
          style={{
            fontFamily: "Proxima Nova",
            fontWeight: "400",
            color: "#BDBEBE"
          }}
        >
          The hash is a sha256 hash of the content of your document.
          <br />
          The filename is not part of the calculation.
        </span>
        <div class="row">
          <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
          <div
            class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6"
            style={{ marginTop: "20px" }}
          >
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
              style={{
                cursor: "pointer",
                backgroundColor: "#11628c",
                color: "#ffffff",
                padding: "5px 25px 5px 25px",
                fontFamily: "Proxima Nova",
                borderRadius: "5px"
              }}
            >
              Choose a file
            </label>
          </div>
          <div
            class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6"
            style={{ marginTop: "20px" }}
          >
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
          <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
        </div>
        <div class="row">
          <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
          <div
            class="col-xl-3 col-lg-3 col-md-8 col-sm-6 col-xs-12"
            style={{ marginTop: "20px" }}
          >
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck"
                name="example1"
                style={{ padding: "100px" }}
              />
              <label
                class="custom-control-label"
                for="customCheck"
                style={{
                  fontFamily: "Proxima Nova",
                  fontWeight: "400",
                  color: "#BDBEBE",
                  marginLeft: "10px"
                }}
              >
                Save the file online
              </label>
            </div>
          </div>
          <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
          <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
          <div
            class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8"
            style={{ padding: "0% 6% 0% 6%" }}
          >
            <input
              type="password"
              placeholder="Password (Optional)"
              class="form-control mb-3 mt-2"
              style={{
                paddingLeft: "25px",
                fontFamily: "Proxima Nova",
                color: "#BDBEBE",
                borderRadius: "10px"
              }}
            />
          </div>
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-3" />
          <div class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-6">
            <span
              class="mt-1 mb-2"
              style={{
                fontFamily: "Proxima Nova",
                fontWeight: "400",
                fontSize: "12px",
                color: "#BDBEBE",
                marginLeft: "10px"
              }}
            >
              You can in addition add a password. <br />
              In that case, you will need both the hash and the password to
              download the file
            </span>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-3" />
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
                backgroundColor: "#17BCDE",
                width: "100%",
                color: "#ffffff",
                borderRadius: "30px",
                fontSize: "35px",
                padding: "3px",
                fontFamily: "Proxima Nova"
              }}
            >
              Record
            </button>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
        </div>
      </React.Fragment>
    );
  }
}

export default CreateTab;
