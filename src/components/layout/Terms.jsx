import React from "react";
import TitleSection from "../TitleSection";
import { useTheme } from "../../ThemeContext";

const Terms = () => {
  const { theme } = useTheme();
  return (
    <section className="terms">
      <div className="container">
        <div className="terms-block">
          <TitleSection title="Terms" span="& Conditions" />

          <div style={{ marginTop: 70 }}>
            <p className="terms-text" style={{ color: theme.text }}>
              Lorem ipsum dolor sit amet, viris altera no usu, meliore appareat
              ex sea. Qui ea novum quando, assum viris aliquam in ius. Has omnis
              eleifend te. Omnesque lucilius per ad, te eam iuvaret habemus.
              Eligendi sensibus conclusionemque duo ex, albucius dissentias
              reformidans sed et. Ad apeirian constituam eam, pro accusata
              dignissim intellegat ad, hinc appetere mediocritatem ne mea. Per
              minim malorum et, eu cum veri paulo. <br />
              <br />
              Te choro persecuti duo, nam cu dolor graeci scaevola, nam vide
              partem id. Est nibh facilis recteque et. Eum solum tempor vivendum
              eu. Mei ubique consectetuer in. Ex vidit diceret per.
              <br />
              <br /> Ad has quod epicuri percipitur, et mundi animal equidem
              has. Legendos scriptorem vis ad. Tritani integre explicari nec eu,
              ei postea fuisset indoctum vel. Mei indoctum tractatos reformidans
              no, sit detraxit phaedrum percipitur in, rebum corpora mea no.
              Aperiam intellegam in sea, qui eu assum minim verear.
            </p>
          </div>

          <div style={{ marginTop: 47 }}>
            <h2 className="terms-title">1. Lorem ipsum</h2>

            <p className="terms-text" style={{ color: theme.text }}>
              Ad has quod epicuri percipitur, et mundi animal equidem has.
              Legendos scriptorem vis ad. Tritani integre explicari nec eu, ei
              postea fuisset indoctum vel. Mei indoctum tractatos reformidans
              no, sit detraxit phaedrum percipitur in, rebum corpora mea no.
              Aperiam intellegam in sea, qui eu assum minim verear.
              <br />
              <br />
              Ea essent fabellas usu. His erat aperiri explicari at. Duo no
              audiam convenire inciderint, ridens postea mandamus sit id. Ei
              saepe oporteat ocurreret vim. Rebum delenit copiosae eu vis,
              decore volumus no vix.
              <br />
              <br />
              Tibique intellegam ea mel, saepe philosophia cum an, doctus
              omittantur et per. Ad mel porro dicant dolorum. An sea assum
              ceteros, tale utroque singulis ad pro. Has no dicunt eloquentiam,
              quis nonumy facilisis eum ad, nulla harum quaerendum cum ex.
              Animal efficiantur per no, quo te lorem veritus. Est veniam
              facilisis eu, ut nullam placerat duo.
            </p>
          </div>

          <div style={{ marginTop: 47 }}>
            <h2 className="terms-title">2. Dolor sit amet</h2>

            <ul className="terms-options">
              <li className="terms-options-item" style={{ color: theme.text }}>
                Lorem ipsum dolor sit amet, viris altera no usu, meliore
                appareat ex sea. Qui ea novum quando, assum viris aliquam in
                ius. Has omnis eleifend te. Omnesque lucilius per ad, te eam
                iuvaret habemus. Eligendi sensibus conclusionemque duo ex,
                albucius dissentias reformidans sed et. Ad apeirian constituam
                eam, pro accusata dignissim intellegat ad, hinc appetere
                mediocritatem ne mea. Per minim malorum et, eu cum veri paulo.
              </li>
              <li className="terms-options-item" style={{ color: theme.text }}>
                Te choro persecuti duo, nam cu dolor graeci scaevola, nam vide
                partem id. Est nibh facilis recteque et. Eum solum tempor
                vivendum eu. Mei ubique consectetuer in. Ex vidit diceret per.
              </li>
              <li className="terms-options-item" style={{ color: theme.text }}>
                Ad has quod epicuri percipitur, et mundi animal equidem has.
                Legendos scriptorem vis ad. Tritani integre explicari nec eu, ei
                postea fuisset indoctum vel. Mei indoctum tractatos reformidans
                no, sit detraxit phaedrum percipitur in, rebum corpora mea no.
                Aperiam intellegam in sea, qui eu assum minim verear.
              </li>
            </ul>
          </div>

          <div style={{ marginTop: 47 }}>
            <h2 className="terms-title">3. viris altera no usu</h2>

            <p className="terms-text" style={{ color: theme.text }}>
              Ad has quod epicuri percipitur, et mundi animal equidem has.
              Legendos scriptorem vis ad. Tritani integre explicari nec eu, ei
              postea fuisset indoctum vel. Mei indoctum tractatos reformidans
              no, sit detraxit phaedrum percipitur in, rebum corpora mea no.
              Aperiam intellegam in sea, qui eu assum minim verear.
            </p>
            <br />
            <br />
            <p
              className="terms-text"
              style={{ fontWeight: "700", color: theme.text }}
            >
              Ea essent fabellas usu. His erat aperiri explicari at. Duo no
              audiam convenire inciderint, ridens postea mandamus sit id. Ei
              saepe oporteat ocurreret vim. Rebum delenit copiosae eu vis,
              decore volumus no vix.
            </p>

            <ul
              className="terms-options"
              style={{ padding: 0, listStyle: "none", marginTop: 20 }}
            >
              <li className="terms-options-item" style={{ listStyle: "none" }}>
                <p className="terms-text" style={{ color: theme.text }}>
                  <span className="terms-text-span">a)</span> Tibique intellegam
                  ea mel, saepe philosophia cum an, doctus omittantur et per. Ad
                  mel porro dicant dolorum. An sea assum ceteros, tale utroque
                  singulis ad pro. Has no dicunt eloquentiam, quis nonumy
                  facilisis eum ad, nulla harum quaerendum cum ex. Animal
                  efficiantur per no, quo te lorem veritus. Est veniam facilisis
                  eu, ut nullam placerat duo.
                </p>
              </li>
              <li className="terms-options-item" style={{ listStyle: "none" }}>
                <p className="terms-text" style={{ color: theme.text }}>
                  <span className="terms-text-span">b)</span> Omnesque lucilius
                  per ad, te eam iuvaret habemus. Eligendi sensibus
                  conclusionemque duo ex, albucius dissentias reformidans sed
                  et.
                </p>
              </li>
              <li className="terms-options-item" style={{ listStyle: "none" }}>
                <p className="terms-text" style={{ color: theme.text }}>
                  <span className="terms-text-span">c)</span> Has no dicunt
                  eloquentiam, quis nonumy facilisis eum ad, nulla harum
                  quaerendum cum ex.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
