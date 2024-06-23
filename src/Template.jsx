import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';  // Adjust the path if your CSS file is in a different location

const TemplateComponent = () => {
  const location = useLocation();
  const formData = location.state?.data || {};
  const { date1, date2, text1, text2, category, subcategory, text3, case_no = '', org_name = '', city = '', state = '', country = '', pin = '', email = '', table_data = [] } = formData;

  return (
    <div className="sheet-outer A4">
      <section className="sheet padding-5mm">
        <div id="top">
          {/* top-left */}
          <div id="imgntext">
            <div id="img">
              <div id="img1">
                <img src="https://th.bing.com/th?id=OIP.agGpskq_U9Mx5uM_AE_NogHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Logo 1" />
              </div>
              <div id="headingntext">
                <div id="heading">
                  <div id="h3-1"><h3>सीएसआईआर-राष्ट्रीय भौतिक प्रयोगशाला</h3></div>
                  <div><h3>CSIR-NATIONAL PHYSICAL LABORATORY</h3></div>
                </div>
                <div id="heading-text">
                  <div>(वैज्ञानिक एवं औद्योगिक अनुसंधान परिषद्)</div>
                  <br />
                  <div>(Council of Scientific and Industrial Research)</div>
                </div>
              </div>
              <div id="img2">
                <img src="https://th.bing.com/th?id=OIP.VTzv9_HKoFQdtG8Q-ggsIgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Logo 2" />
              </div>
            </div>
            <div id="top-text">
              <p>राष्ट्रीय माप विज्ञान संस्थान (एनपीएल), भारत</p>
              <br />
              <p>(National Metrology Institute (NMI), Member BIPM and Signatory CIPM-MRA)</p>
              <br />
              <p>डॉ. के. एस. कृष्णन मार्ग, नई दिल्ली-110012, भारत</p>
              <br />
              <p>Dr. K. S. Krishnan Marg, New Delhi-110012, INDIA</p>
              <br />
              <p>दूरभाष/Phone: 91-11-4560 8441, 8589, 8610, 9447, फैक्स/ Fax: 91-11-4560 8448</p>
              <br />
              <p>ई-मेल/ E-mail: cfct@nplindia.org, वेबसाईट / Website: www.nplindia.org</p>
            </div>
          </div>
          {/* top-right */}
          <div id="top-table">
            <table>
              <thead>
                <tr id="top-row">
                  <th>
                    <p>अंशांकन प्रमाण पत्र</p>
                    <p>CALIBRATION CERTIFICATE
                      <br />
                      Voltage Transformer
                      Sr.
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr id="bottom-row">
                  <th><span>प्रमाणपत्र संख्या/Certificate No.</span><br />{case_no}{category}{subcategory}{text3}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="top-below-table">
            <table>
              <thead>
                <tr>
                  <th id="th-1">दिनांक/Date
                    <br />{date1}
                  </th>
                  <th>अगले अंशांकन के लिए अनुशंसित तिथि
                    <br />
                    Recommended date for next calibration
                    <br />{date2}
                  </th>
                  <th>पृष्ठ/Page
                    <br />{text1}
                  </th>
                  <th>कुल पृष्ठ/Total pages
                    <br />{text2}</th>
                </tr>
              </thead>
            </table>
          </div>
          <div id="middle-table">
            <table>
              <tbody>
                <tr>
                  <td>1. Calibrated for</td>
                  <td>:</td>
                  <td>{org_name}, <br />{city} {state}, {country}, {pin},<br /><br />Customer's Ref. No.: {email}</td>
                </tr>
                <tr>
                  <td>2. Description & Identification <br />of item under calibration</td>
                  <td>:</td>
                  <td>
                    {table_data.map((row, rowIndex) => (
                      <div key={rowIndex}>
                        {/* <p><strong></strong></p> */}
                        <p><strong></strong> {row[1]}</p>
                        <p><strong></strong> {row[2]}</p>
                        {/* <p><strong>Qty.:</strong> {row[3]}</p> */}
                        <p><strong></strong> {row[4]}</p>
                        {/* <p><strong>Remarks, if any:</strong> {row[5]}</p> */}
                      </div>
                    ))}
                  </td>
                </tr>
                <tr>
                  <td>3. Environmental Conditions</td>
                  <td>:</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus placeat impedit sint ipsam, enim ratione. Similique neque veniam unde?</td>
                </tr>
                <tr>
                  <td>4. Standards used <br />Associated uncertainty</td>
                  <td>:</td>
                  <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores, consequatur vitae ex eligendi consectetur dignissimos, odit nemo est sequi quidem quod quasi? Dignissimos rerum delectus labore amet. Explicabo nulla magnam temporibus repudiandae officia. Impedit earum velit quis corrupti reprehenderit.</td>
                </tr>
                <tr>
                  <td>5. Traceability of Standards <br />used</td>
                  <td>:</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, odio. A hic sit at rem alias, quam exercitationem adipisci repellat tempora corporis illum voluptatibus aliquid natus nisi ipsam cupiditate eveniet?</td>
                </tr>
                <tr>
                  <td>6. Principle/Methodology of calibration<br />& Calibration Procedure number</td>
                  <td>:</td>
                  <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum itaque eius placeat voluptatibus ipsum temporibus quaerat doloremque cupiditate amet? Eos voluptate quasi sapiente at cupiditate dignissimos cum, nulla vel pariatur? Nobis labore quibusdam quas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div id="bottom-line"></div>
        <div id="bottom-text">
          <div><p>अंशांकनकर्त्ता:</p><p>Calibrated by:</p></div>
          <div><p>जाँचकर्त्ता:</p><p>Tested by:</p></div>
        </div>
      </section>
    </div>
  );
};

export default TemplateComponent;
