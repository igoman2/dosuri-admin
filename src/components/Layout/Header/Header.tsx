// components/Layout/Header/Header.tsx
'use client';
import styled from "@emotion/styled";
import oc from 'open-color';
import * as Icon from "@/src/util/Icon/svg"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <HeaderWrapper> 
                <Link href="/">
                    <Icon.Logo1/>
                </Link>
                <h2> 병원 관리자</h2>
            </HeaderWrapper>
        </header>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;

    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: #3D3DC1;
    color: white;
    border-bottom: 1px solid ${oc.indigo[7]};
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
`;

const Icon.Logo1 = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;

    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;

    /* 색상 */
    background: #3D3DC1;
    color: white;
    border-bottom: 1px solid ${oc.indigo[7]};
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
`;