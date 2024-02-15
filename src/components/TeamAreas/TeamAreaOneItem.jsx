import React from "react";
import { Link } from "react-router-dom";

export const TeamAreaOneItem = ({ member }) => {
  return (
    <div className="team-item">
      <div className="team-thumb">
        <img src={member.src} alt="" />

        <div className="team-social">
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
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            }
          </ul>
        </div>
      </div>

      <div className="team-content">
        <h2 className="title">
          <a>{member.title} </a>
        </h2>

        <span>{member.designation} </span>
      </div>
    </div>
  );
};
