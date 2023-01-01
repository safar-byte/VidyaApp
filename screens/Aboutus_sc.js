import React, { useEffect, useRef, useState, Component, current } from "react";
import { Text, View, StyleSheet, ActivityIndicator, BackHandler, Platform, LogBox, Dimensions } from "react-native";
import { WebView } from 'react-native-webview';
import OfflineNotice from "../components/OfflineNotice";
import NetInfo from "@react-native-community/netinfo";
import SomethingWent from "../components/SomethingWent";



export default function Aboutus_sc() {



    const webViewRef = useRef();

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

            return () => {
                BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
            }
        }
    }, []); // INITIALIZE ONLY ONCE

    const HandleBackPressed = () => {
        if (webViewRef.current.canGoBack) {
            webViewRef.current.goBack();
            return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
        }
        return false;
    }



    const [isInternetReachable, setisInternetReachable] = useState(false);
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setisInternetReachable(state.isInternetReachable)
        });
        return () => unsubscribe();

    }, [])

    //remove all warn
    LogBox.ignoreAllLogs();


    const injectJS = () => {
        webViewRef.current.injectJavaScript(
            `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
            document.querySelector("#opener").remove();
            document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
            document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
            document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
            document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
            document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
            document.querySelector("#histats_counter_4964_canvas").remove();
            ;
            
            `,


        );
        const onNavigationStateChange = (navState) => {
            if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=4') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
               ; `,

                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/vision_mission.php') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=6') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=135') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=136') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=137') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=138') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/page.php?sub_page=143') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/setnew.php?sub=4') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/setnew.php?sub=8') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://www.vidyatcklmr.ac.in/page.php?page=102') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }
            else if (navState.url === 'https://vidyatcklmr.ac.in/setnew.php?sub=11') {
                webViewRef.current.injectJavaScript(
                    `document.querySelector("body > section.hed > div.insti.wow.fadeInLeft > div > div > div.col-lg-4.col-md-5.col-sm-12.col-xs-12 > ul").remove();
                    document.querySelector("#opener").remove();
                    document.querySelector("body > section.quk_lnk.wow.fadeInUp > button").remove();
                    document.querySelector("body > section.hed > div.menu.wow.fadeInRight > div > div > div.col-lg-10.col-md-12.col-sm-12.col-xs-12").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(1) > div > div > div.col-lg-3.col-md-3.col-sm-12.col-xs-12.cont_L_bordr > div > h1").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(2) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(3) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(4) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(5) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(6) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(7) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(8) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(9) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(10) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(11) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(12) > a").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(13) > a").remove();
                    document.querySelector("body > section.hed > div.container > div > div.col-lg-2.col-md-12.col-sm-12.col-xs-12 > section").remove();
                    document.querySelector("#cssmenu > ul > li:nth-child(1) > ul > li:nth-child(4) > a").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(3)").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(4) > div").remove();
                    document.querySelector("#histats_counter_4964_canvas").remove();
                    document.querySelector("body > section.cont_bg > div:nth-child(6) > div > div > div > p").remove();
                    ;`,
                );
            }

            webViewRef.current.canGoBack = navState.canGoBack
        };


    };

    return (
        <>

            <View style={{ flex: 1 }}>


                {isInternetReachable ?
                    <WebView
                        ref={webViewRef}
                        style={styles.container}
                        // injectedJavaScript={runFirst}
                        onLoad={injectJS}

                        source={{ uri: 'https://vidyatcklmr.ac.in/about_us.php' }}
                        // onNavigationStateChange={onNavigationStateChange}

                        onMessage={(event) => {
                            alert(event.nativeEvent.data);
                        }}

                        // injectedJavaScript={runFirst}
                        renderError={() => (<SomethingWent />)}
                        renderLoading={() => (
                            <ActivityIndicator
                                color="black"
                                size="large"
                                style={styles.flexContainer}
                            />
                        )}
                    /> : <OfflineNotice />

                }


            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",

    },
    flexContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    }

})