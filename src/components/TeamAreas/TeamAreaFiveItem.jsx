import React from "react";
import { Link } from "react-router-dom";

export const TeamAreaFiveItem = ({ member }) => {
  return (
    <div className="team-item-five">
      <div className="team-thumb-five">
        <img src={member.src} alt="" />
      </div>

      <div className="team-content-five">
        <h2 className="title">
          <Link to={member.href}>{member.title} </Link>
        </h2>
        <span>{member.designation} </span>

        <div className="team-social-four">
          <ul className="list-wrap">
            {member?.social?.facebook &&
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            }
            {member?.social?.twitter &&
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            }
            {member?.social?.instagram &&
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            }
            {member?.social?.linkedin &&
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
