import React, { useState } from "react";
import TitleSection from "../../../TitleSection";
import { useTable } from "react-table";

const ReportCampaigns = () => {
  const [data] = useState([
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
    {
      name: "TechnoFratemity",
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
    {
      name: "Techno Rebels",
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
    {
      name: "Party Addicted",
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
              {data.map((row, indexRow) => {
                const elements = [];

                let index = 0;
                for (let currentRow in row) {
                  elements.push(
                    <td
                      className={`report-table-body-row-item${
                        index === 0 ? "-first" : ""
                      }${index % 2 === 0 && index !== 0 ? "-second" : ""}`}
                    >
                      {row[currentRow]}
                    </td>
                  );
                  index++;
                }
                if (indexRow === data.length - 1) {
                  return (
                    <>
                      <tr className="report-table-body-row"> {elements}</tr>
                      <tr className="report-table-body-total">
                        <td className="report-table-body-total-price">
                          TOTAL: 1599€
                        </td>
                        <td className="report-table-body-row-item">5056500</td>
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
                    </>
                  );
                }
                return <tr className="report-table-body-row"> {elements}</tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReportCampaigns;
