import React from 'react';
import mark from '../wmcMark.png';
import '../App.css';

let Main=()=> {
  return (
    <div>
      <section className="imgContainer">
        <img src={mark} className="frontMark"/>
          <a>
            <span></span>
          </a>
      </section>

      <section className="introduce" id="intro-1">
        <div className="phrase text-1">
          <p>
          동아리소개1 입니다.
          </p>
        </div>
        <div className="phrase text-2">
          <p>
          WMC는<br/>We Make Creative의 약자입니다.
          </p>
        </div>
        <div className="phrase text-3">
          <p>
          WMC는 서울과학기술대학교<br/>컴퓨터공학과 동아리입니다.
          </p>
        </div>
      </section>
      
      <section className="introduce" id="intro-2">
        <div className="activity text-1">
          <p>
          동아리소개2 입니다.
          </p>
        </div>
        <div className="activity text-2">
          <p>
          WMC에서는 다양한 활동을 합니다.
          </p>
        </div>
        <div className="activity text-3">
          <p>
          공모전과 스터디 활동을 합니다.
          </p>
        </div>
      </section>
      
      <section className="introduce" id="intro-3">
        <div className="end text-1">
          <p>
          동아리소개3 입니다.
          </p>
        </div>
        <div className="end text-1">
          <p>
          프로그래밍을 열심히해봅시다~~
          </p>
        </div>
      </section>

      <section className="introduce" id="intro-4">
        <p className="description">
          <strong>WMC 연혁</strong><br></br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.
        </p>
      </section>
    </div>
  );
}

export default Main;