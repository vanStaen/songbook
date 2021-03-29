import { React, useState } from "react";
import { Radio, Input, Tag, notification } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import './Extras.css';


const Extras = (props) => {

    const [valueRadioTabsType, setValueRadioTabsType] = useState(props.bass ? "b" : (props.piano ? "p" : "g"))
    const [artist, setArtist] = useState(props.artist);
    const [song, setSong] = useState(props.song);
    const [isArtistEditMode, setIsArtistEditMode] = useState(false);
    const [isSongEditMode, setIsSongEditMode] = useState(false);
    const [editInputValue, setEditInputValue] = useState('');

    const maxTagWidth = props.isDrawerFold ? 165 : 400;

    const patchLinkInDB = (data) => {
        async function patchEntry(data) {
            const response = await axios({
                url: process.env.REACT_APP_API_URL + '/songbook/' + props.id,
                method: 'PATCH',
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + props.token,
                },
            });
            if ((response.status !== 200) & (response.status !== 201)) {
                throw new Error("Error!");
            }
            const patchResult = await response.data;
            return patchResult;
        }
        patchEntry(data).then((resData) => {
            console.log("Success", resData)
            props.setPageHasChanged("true");
        }
        ).catch(error => {
            props.logout();
            notification.error({ description: `Unauthorized! Please login.`, });
            console.log("error", error.message);
        });
    }

    const handleEditChange = e => {
        setEditInputValue(e.target.value);
    };

    const handleEditCancel = () => {
        isArtistEditMode && setIsArtistEditMode(false);
        isSongEditMode && setIsSongEditMode(false);
        setEditInputValue('');
    }
    const handleEditConfirm = () => {
        if (isArtistEditMode) {
            if (editInputValue.length > 0) {
                patchLinkInDB({ 'artist': editInputValue });
            } else {
                patchLinkInDB({ 'artist': 'null' });
            }
            setArtist(editInputValue);
            props.setArtist(editInputValue);
            setIsArtistEditMode(false);
        }
        else if (isSongEditMode) {
            if (editInputValue.length > 0) {
                patchLinkInDB({ 'song': editInputValue });
            } else {
                patchLinkInDB({ 'song': 'null' });
            }
            setSong(editInputValue);
            props.setSong(editInputValue);
            setIsSongEditMode(false);
        };
        setEditInputValue('');
        props.setPageHasChanged("true");
    }

    const returnCropedText = (text, threshold) => {

        let howLongShouldItbe;
        let cutAtChar;
        let isLongText = false;

        const getTextWidth = (inputText) => {
            const font = "12px sans-serif";
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            context.font = font;
            const width = context.measureText(inputText).width;
            return width;
        }

        for (howLongShouldItbe = text.length; getTextWidth(text.slice(0, howLongShouldItbe)) > threshold; howLongShouldItbe--) {
            cutAtChar = howLongShouldItbe;
            isLongText = true;
        }

        const cropedText = isLongText ? `${text.slice(0, cutAtChar)}...` : text;
        return cropedText;
    }

    const onRadioChangeTabsType = e => {
        switch (e.target.value) {
            case "g":
                props.setIsBass(false)
                props.setIsPiano(false)
                patchLinkInDB({ 'bass': false, 'piano': false, });
                break;
            case "b":
                props.setIsBass(true)
                props.setIsPiano(false)
                patchLinkInDB({ 'bass': true, 'piano': false, });
                break;
            case "p":
                props.setIsBass(false)
                props.setIsPiano(true)
                patchLinkInDB({ 'bass': false, 'piano': true, });
                break;
            default:
                console.log('Error!');
        }
        setValueRadioTabsType(e.target.value);
    };

    return (
        <div>
            <div className="Extras__radioType">
                <Radio.Group onChange={onRadioChangeTabsType} value={valueRadioTabsType}>
                    <Radio value="g">Guitar</Radio>
                    <Radio value="b">Bass</Radio>
                    <Radio value="p">Piano</Radio>
                </Radio.Group>
            </div>
            <div className="Extra__spacer"></div>
            <div className="Extras__artist">
                &nbsp;&nbsp;Artist:
                {isArtistEditMode ?
                    (<Input
                        key={`link_input_${props.id}`}
                        size="small"
                        className="Extras__input"
                        value={editInputValue}
                        onChange={handleEditChange}
                        onBlur={handleEditCancel}
                        onPressEnter={handleEditConfirm}
                    />)
                    :
                    (<Tag key="Artist">
                        {returnCropedText(artist, maxTagWidth)}
                        &nbsp;&nbsp;
                        <EditOutlined onClick={e => {
                            setEditInputValue(artist);
                            setIsArtistEditMode(true);
                            setIsSongEditMode(false);
                            e.preventDefault();
                        }} />
                    </Tag>
                    )
                }
            </div>
            <div className="Extras__song">
                &nbsp;&nbsp;&nbsp;Song:
                {isSongEditMode ?
                    (<Input
                        key={`link_input_${props.id}`}
                        size="small"
                        className="Extras__input"
                        value={editInputValue}
                        onChange={handleEditChange}
                        onBlur={handleEditCancel}
                        onPressEnter={handleEditConfirm}
                    />)
                    :
                    (<Tag key="Song" >
                        {returnCropedText(song, maxTagWidth)}
                        &nbsp;&nbsp;
                        <EditOutlined onClick={e => {
                            setEditInputValue(song)
                            setIsSongEditMode(true);
                            setIsArtistEditMode(false);
                            e.preventDefault();
                        }} />
                    </Tag>)
                }
            </div>
        </div>


    )

}

export default Extras;