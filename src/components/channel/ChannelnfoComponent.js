import React from "react"

import Div from "../basic/Div"
import P from "../basic/P"
import SeeMore from "../common/SeeMore";
import Profile from "../common/Profile";
import {Link} from "react-router-dom";

const ChannelInfoContainer = () => {

    const tmpChannelInfo =
        {
            profile: {
                email: "undefined@shoot.com",
                profile_img: "../../../public/assets/images/user.svg",
            },
            name: "webstorm",
            sex: 0,
            authority: 0,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu justo dui. Duis at pellentesque justo. Vivamus in orci elementum sapien convallis rutrum. Praesent vestibulum scelerisque purus, et vehicula mauris pulvinar id.',
            view_count: 123456,
            subscriber_count: 987654,
            channel_date: '2022-12-31',
            birth: '2033-1-1',
            subscribe_state: false
        }

    const birth = tmpChannelInfo.birth.split("-")
    const channelDate = tmpChannelInfo.channel_date.split("-")

    return (
        <React.Fragment>
            <Div margin="0 0 20px 0">
                <Div margin="0 0 10px 0">
                    <P fontWeight="700">가입한 이메일</P>
                </Div>
                <P>{tmpChannelInfo.profile.email}</P>
            </Div>
            <Div margin="0 0 20px 0">
                <Div margin="0 0 10px 0">
                    <P fontWeight="700">가입날짜</P>
                </Div>
                <P>{birth[0]}년 {birth[1]}월 {birth[2]}일 </P>
            </Div>
            <Div margin="0 0 20px 0">
                <Div margin="0 0 10px 0">
                    <P fontWeight="700">성별</P>
                </Div>
                <P>{tmpChannelInfo.sex === 0 ? '남성' : '여성'}</P>
            </Div>
            <Div margin="0 0 20px 0">
                <Div margin="0 0 20px 0">
                    <P fontWeight="700">가입날짜</P>
                </Div>
                <P>{channelDate[0]}년 {channelDate[1]}월 {channelDate[2]}일 </P>
            </Div>
            <Div margin="0 0 20px 0">
                <Div margin="0 0 20px 0">
                    <Link to="" style={{ textDecoration: 'none' }}><P color="primary" fontWeight="700">비밀번호 변경하기</P></Link>
                </Div>
            </Div>

        </React.Fragment>

    )
}

export default ChannelInfoContainer
