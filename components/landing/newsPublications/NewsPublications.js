import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
// component
import AppBtn from "../../../common_components/appBtn/AppBtn";
import AppMultiSlider from "../../../common_components/appMultiSlider/AppMultiSlider";
import CommonSectionHeader from "../commonSectionHeader/CommonSectionHeader";
import NewsPublicationsCard from "../../../common_components/newsPublicationsCard/NewsPublicationsCard";
//css
import styles from "./news-publications.module.sass";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1000: { items: 1 },
  1024: { items: 1 },
  1440: { items: 1 },
};

const items = [];
const itemsTab = [];

function setItem(data) {
  data.forEach((item, index) => {
    if ((index + 1) % 3 === 0) {
      items.push(
        <div className={`${styles.news_container}`} data-value="1">
          <Row gutter={[16, 16]}>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <NewsPublicationsCard data={data[index - 2]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <NewsPublicationsCard data={data[index - 1]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <NewsPublicationsCard data={data[index]} />
            </Col>
          </Row>
        </div>
      );
      itemsTab.push(
        <div className={`${styles.news_container}`} data-value="1">
          <Row gutter={[8, 8]}>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <NewsPublicationsCard data={data[index - 2]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <NewsPublicationsCard data={data[index - 1]} />
            </Col>
            <Col span={8} className={`d-flex justify-content-center my-4`}>
              <NewsPublicationsCard data={data[index]} />
            </Col>
          </Row>
        </div>
      );
    }
  });
}

export default function NewsPublications({ newsData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevBtn, setPrevBtn] = useState("disable");
  const [nextBtn, setNextBtn] = useState("enable");
  let finalIndex = Math.floor(parseInt(newsData.length) / 3);

  const slidePrev = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    if (activeIndex < finalIndex - 1) setActiveIndex(activeIndex + 1);
  };

  const onSlideChanged = ({ item }) => setActiveIndex(item);

  useEffect(() => {
    if (activeIndex === 0) setPrevBtn("disable");
    else setPrevBtn("enable");
    if (activeIndex === finalIndex - 1) setNextBtn("disable");
    else setNextBtn("enable");
  }, [activeIndex]);

  setItem(newsData);

  return (
    <div className={`${styles.news_container} py-5`}>
      <CommonSectionHeader
        title={"News & Publications"}
        sliderSection={true}
        prevBtn={prevBtn}
        nextBtn={nextBtn}
        onClickPrev={slidePrev}
        onClickNext={slideNext}
      />
      <Row>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <AppMultiSlider
            responsive={responsive}
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            paddingLeft={0}
            paddingRight={0}
            animationType={"fadeout"}
          />
        </Col>
        <Col xs={0} sm={0} md={24} lg={0} xl={0}>
          <AppMultiSlider
            responsive={responsive}
            items={itemsTab}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            paddingLeft={0}
            paddingRight={0}
          />
        </Col>
        <div className={`d-flex w-100 justify-content-end`}>
          <AppBtn
            text={`See All`}
            prefix={""}
            suffix={<ArrowRightOutlined className={`ml-2 pt-1`} />}
            mode={"dark"}
          />
        </div>
      </Row>
    </div>
  );
}
