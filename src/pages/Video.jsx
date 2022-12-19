import React from "react";

import { useParams } from "react-router-dom";
import VideoPlayer from "../components/videoPlayer";
import AppConfig from "../config/env";
import { Layout, Row, Col } from "antd";
const { Content } = Layout;
const Video = () => {
  const { meetingId } = useParams();

  const videoJsOptions = {
    autoplay: false,
    aspectRatio: "16:9",
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: `${AppConfig.bbbServerUrl}/recording/${meetingId}.mp4`,
        type: "video/mp4",
      },
    ],
  };
  console.log(videoJsOptions.sources[0].src);
  return (
    <Content>
      <Row>
        <Col
          xs={{ span: 24 }}
          md={{ span: 24, offset: 0 }}
          lg={{ span: 20, offset: 2 }}
        >
          <VideoPlayer
            options={videoJsOptions}
            onReady={() => {
              console.log("Player is ready");
            }}
          />
        </Col>
      </Row>
    </Content>
  );
};

export default Video;
