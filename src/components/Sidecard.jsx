import React from "react";
import "./Sidecard.css";
import user from "../Images/user.jpg";
import { FcHome } from 'react-icons/fc'
import { FcBusinessman } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { RiNotification3Fill } from "react-icons/ri";
import { TbSettingsFilled } from "react-icons/tb";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sidecard = () => {
  return (
    <div className="main rounded">
      <div className="background"></div>
      <div className="body rounded" style={{ backgroundColor: '#141519' }}>
        <Container fluid>
          {/* Profile */}
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="profile">
                <img className="rounded profileimg border border-white border-3" src={user} alt="" />
              </div>
            </Col>
          </Row>
          {/* Info */}
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <div className="detail">
                <h5 className="text-white title pt-2 m-0">
                  Sam lanson
                </h5>
                <small className="silver">Web Developer at Webistica</small>
                <p className="silver mt-3">
                  I'd love to change the world, but <br /> they won’t give me the source
                  code.
                </p>
                {/* Stats */}
                <Row className="justify-content-center mt-3">
                  <Col xs={4} className="text-center">
                    <div>
                      <span className="stats-number">250</span><br />
                      <span className="silver">Posts</span>
                    </div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div>
                      <span className="stats-number">2.5k</span><br />
                      <span className="silver">Followers</span>
                    </div>
                  </Col>
                  <Col xs={4} className="text-center">
                    <div>
                      <span className="stats-number">365</span><br />
                      <span className="silver">Following</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Divider */}
        <div className="divider"></div>
        {/* Menu */}
        <div className="menu mt-4 rounded">
          <div className="p-2"><FcHome className="me-2 text-center" size={20} />Feed</div>
          <div className="p-2"><FcBusinessman className="me-1 text-center" size={27} />Connections</div>
          <div className="p-2"><FcGlobe className="me-1 text-center" size={27} /> Latest News</div>
          <div className="p-2"><FcCalendar className="me-1 text-center" size={27} />Events</div>
          <div className="p-2"><FcConferenceCall className="me-1 text-center" size={27} />Groups</div>
          <div className="p-2"><RiNotification3Fill className="me-1 text-center" size={27} />Notifications</div>
          <div className="p-2"><TbSettingsFilled className="me-1 text-center" size={27} />Settings</div>
          <div className=" p-2"><a className="text-center ms-5 fw-lighter text-decoration-none" href="#"> View Profile</a></div>
        </div>
      </div>
    </div>
  );
};

export default Sidecard;
