// components/Layout/Header/Header.tsx
'use client';
import styled from "@emotion/styled";
import oc from 'open-color';
import Icon from "@/src/util/Icon"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <Wrapper> 
                <Link href="/">
                    <Icon name="logo1" width="82" height="22" />
                </Link>
            </Wrapper>
            <h2> 병원 관리자</h2>
        </header>
    )
}

export default Header;

const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;

    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: ${oc.indigo[6]};
    color: white;
    border-bottom: 1px solid ${oc.indigo[7]};
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
`;

const Logo = styled.div`

    color: white;
    margin-left: 10%;
    /* 폰트 */
    font-size: 2.5rem;
`;