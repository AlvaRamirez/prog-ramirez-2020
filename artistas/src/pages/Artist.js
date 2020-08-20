import React from 'react'
import {useParams} from "react-router-dom";
import Layout from '../containers/Layout'
import MainArtist from '../components/MainArtists';

const Artist = () => {

    const {id}=useParams();
    return(
        <div className='App'>
            <Layout>
            <MainArtist/>
            </Layout>
        </div>
    )

}

export default Artist