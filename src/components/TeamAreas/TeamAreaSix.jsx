import React from "react";
import { TEAM_LIST_FIVE } from "../../mocks/team";
import { TeamAreaFiveItem } from "./TeamAreaFiveItem";

export const TeamAreaSix = () => {
  return (
    <section className="team-area-six" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6" style={{ marginTop: "-80px"}}>
            <div className="section-title section-title-three text-center mb-50">
              <span className="sub-title">Meet Our Team</span>
              <h2 className="title">Experience Team Members</h2>
              <p>
              Get acquainted with the hardworking individuals driving our mission forward.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {TEAM_LIST_FIVE.map((member) => (
            <div
              key={member.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-10"
            >
              <TeamAreaFiveItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
