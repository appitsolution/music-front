import React, { useEffect, useState } from "react";
import TitleSection from "../../../TitleSection";
import { useTable } from "react-table";
import { useParams } from "react-router-dom";
import axios from "axios";
import UseVerify from "../../../../hooks/useVerify";

const ReportCampaigns = () => {
  const params = useParams();

  const [dataPromo, setDataPromo] = useState(null);
  const [data, setData] = useState([
    {
      name: "Techno TV",
      score: "181000",
      brand: "Madrid Show",
      datePost: "1-7 April",
      caption: "@pegg...",
      video: "https:/driv...",
      swipeUpLink: "https:/link...",
      storyTag: "@circol...",
      postLink: "https:/ww...",
      screenShot: "https:/drive.g...",
      impressions: "5388",
      like: "46",
    },
  ]);

  const [headers] = useState([
    {
      Header: "Brand",
      accessor: "Brand",
    },
    {
      Header: "Date Post",
      accessor: "Date Post",
    },
    {
      Header: "Caption",
      accessor: "Caption",
    },
    {
      Header: "Video",
      accessor: "Video",
    },
    {
      Header: "Swipe Up Link",
      accessor: "Swipe Up Link",
    },
    {
      Header: "Story Tag",
      accessor: "Story Tag",
    },
    {
      Header: "Post Link",
      accessor: "Post Link",
    },
    {
      Header: "Screenshot In",
      accessor: "Screenshot In",
    },
    {
      Header: "Impressions",
      accessor: "Impressions",
    },
    {
      Header: "Likes",
      accessor: "Likes",
    },
  ]);

  const getData = async () => {
    try {
      const { dataFetch } = await UseVerify();
      const result = await axios(
        `${process.env.REACT_APP_SERVER}/promos/ongoing/one?id=${params.id}&userId=${dataFetch._id}`
      );
      console.log(result.data.promo);
      if (result.data.code === 200) {
        setDataPromo(result.data.promo);
        setData(result.data.promo.selectInfluencers);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="report">
      <div className="container">
        <div className="report-block">
          <TitleSection title="report" span="of the campaigns" />

          <div className="report-info">
            <div className="report-info-item">
              <p className="report-info-text">
                Offer: <span className="report-info-text-span">IG 5M</span>
              </p>
              <p className="report-info-text">Date: 2023/01/01</p>
            </div>
            <div className="report-info-item">
              <p className="report-info-text">
                Brand:
                <span className="report-info-text-span">Circolo Ibiza</span>
              </p>
              <p className="report-info-text">When Requested: 2023/01/01</p>
            </div>
            <div className="report-info-item">
              <p className="report-info-text">
                Included: 23 posts + 23 stories
              </p>
            </div>
          </div>

          <table className="report-table">
            <thead className="report-table-header">
              <tr>
                <td></td>
                <td></td>
                {headers.map((head) => (
                  <td className="report-table-header-item">{head.Header}</td>
                ))}
              </tr>
            </thead>
            <tbody className="report-table-body">
              {data.map((item, indexRow) => (
                <tr className="report-table-body-row">
                  <td className="report-table-body-row-item-first">
                    {item ? item.firstName : "No Date"}
                  </td>
                  <td className="report-table-body-row-item">
                    {item ? item.followersNumber : "No Date"}
                  </td>
                  <td className="report-table-body-row-item-second">
                    {item ? item.brand : "No Date"}
                  </td>
                  <td className="report-table-body-row-item">
                    {item ? item.datePost : "No Date"}
                  </td>
                  <td className="report-table-body-row-item-second">
                    {item ? item.caption : "No Date"}
                  </td>
                  <td className="report-table-body-row-item">
                    {item ? item.video : "No Date"}
                  </td>
                  <td className="report-table-body-row-item-second">
                    {dataPromo ? dataPromo.swipeUpLink : "No Date"}
                  </td>
                  <td className="report-table-body-row-item">
                    {dataPromo ? dataPromo.storyTag : "No Date"}
                  </td>
                  <td className="report-table-body-row-item-second">
                    {item ? item.postLink : "No Date"}
                  </td>
                  <td className="report-table-body-row-item">
                    {item ? item.screenshot : "No Date"}
                  </td>
                  <td className="report-table-body-row-item-second">
                    {item ? item.impressions : "No Date"}
                  </td>
                  <td className="report-table-body-row-item">
                    {item ? item.like : "No Date"}
                  </td>
                </tr>
              ))}
              <tr className="report-table-body-total">
                <td className="report-table-body-total-price">
                  TOTAL: {dataPromo ? dataPromo.selectPrice.price : 0}€
                </td>
                <td className="report-table-body-row-item"></td>
                <td className="report-table-body-row-item-second"></td>
                <td className="report-table-body-row-item"></td>
                <td className="report-table-body-row-item-second"></td>
                <td className="report-table-body-row-item"></td>
                <td className="report-table-body-row-item-second"></td>
                <td className="report-table-body-row-item"></td>
                <td className="report-table-body-row-item-second"></td>
                <td className="report-table-body-row-item"></td>
                <td className="report-table-body-row-item-second"></td>
                <td className="report-table-body-row-item"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReportCampaigns;
