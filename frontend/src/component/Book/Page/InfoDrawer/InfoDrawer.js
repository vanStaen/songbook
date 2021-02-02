import { React, useEffect, useState } from "react";
import YouTube from 'react-youtube';
import { Drawer, Divider } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import Tags from './Tags/Tags';
import Lyrics from './Lyrics/Lyrics';
import Links from './Links/Links';
import Extras from './Extras/Extras';
import DangerZone from './DangerZone/DangerZone'

const InfoDrawer = (props) => {
    const [widthDrawer, setWidthDrawer] = useState(350);
    const [isDrawerFold, setIsDrawerFold] = useState(true);
    const [artist, setArtist] = useState(props.page.artist);
    const [song, setSong] = useState(props.page.song);

    const videoID = props.page.videourl ? props.page.videourl.split('=')[1] : '';
    const videoOptions = {
        height: isDrawerFold ? 227 : 310,
        width: isDrawerFold ? 300 : 550,
        playerVars: {
            autoplay: 0,
        },
    };

    // Use effect to fold drwaaer after close
    useEffect(() => {
        handlerFoldDrawer(isDrawerFold);
    }, [isDrawerFold]);

    const handlerFoldDrawer = (value) => {
        value ? setWidthDrawer(350) : setWidthDrawer(600);
        setIsDrawerFold(value);
    }

    const handlerCloseDrawer = () => {
        setIsDrawerFold(true);
        props.setDrawerVisible(false);
    };

    return (
        <Drawer
            title={
                <div>
                    {isDrawerFold ?
                        <MenuFoldOutlined onClick={() => handlerFoldDrawer(false)} />
                        :
                        <MenuUnfoldOutlined onClick={() => handlerFoldDrawer(true)} />
                    }
                    &nbsp;&nbsp;{isDrawerFold ? song.toUpperCase() : (artist.toUpperCase() + " - " + song.toUpperCase())}
                    &nbsp;<span style={{ color: "#eee" }}>#{props.page.id}</span>
                </div>
            }
            placement="right"
            closable={true}
            onClose={handlerCloseDrawer}
            visible={props.drawerVisible}
            width={widthDrawer}
        >
            {props.page.videourl ?
                (<YouTube videoId={videoID} opts={videoOptions} />)
                : (<img src={props.page.picurl} className="Page-drawer__artwork" alt="pic_missing" ></img>)
            }

            <Divider orientation="left" plain>
                <span className="Page-drawer__diviser">
                    Links
                </span>
            </Divider>

            <Links
                tabs={props.page.link}
                video={props.page.videourl}
                pic={props.page.picurl}
                id={props.page.id}
                setTabsMissing={props.setTabsMissing}
                setVideoMissing={props.setVideoMissing}
                setPicMissing={props.setPicMissing}
                isDrawerFold={isDrawerFold}
                token={props.token}
                setPageHasChanged={props.setPageHasChanged}
            />

            <Divider orientation="left" plain>
                <span className="Page-drawer__diviser">
                    Tags
                </span>
            </Divider>
            <Tags
                tags={props.page.tags}
                id={props.page.id}
                setTagsMissing={props.setTagsMissing}
                token={props.token}
                setPageHasChanged={props.setPageHasChanged}
            />

            {props.token != null && (
                <>
                    <Divider orientation="left" plain>
                        <span className="Page-drawer__diviser">
                            Extras
                    </span>
                    </Divider>
                    <Extras
                        artist={props.page.artist}
                        song={props.page.song}
                        piano={props.page.piano}
                        bass={props.page.bass}
                        setArtist={setArtist}
                        setSong={setSong}
                        isDrawerFold={isDrawerFold}
                        id={props.page.id}
                        setIsPiano={props.setIsPiano}
                        setIsBass={props.setIsBass}
                        token={props.token}
                        setPageHasChanged={props.setPageHasChanged}
                    />
                </>)}


            <Divider orientation="left" plain>
                <span className="Page-drawer__diviser">
                    Lyrics
                    </span>
            </Divider>
            <Lyrics id={props.page.id} />


            {props.token != null && (
                <>
                    <Divider orientation="left" plain>
                        <span className="Page-drawer__diviser">
                            Danger Zone
                        </span>
                    </Divider>
                    <DangerZone
                        id={props.page.id}
                        active={props.page.active}
                        token={props.token}
                        setPageHasChanged={props.setPageHasChanged}
                    />
                </>)}

        </Drawer>
    )

}

export default InfoDrawer;