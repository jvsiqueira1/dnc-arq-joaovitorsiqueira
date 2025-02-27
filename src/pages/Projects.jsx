import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProjectsList from '../components/ProjectsList/ProjectsList'
import Banner from '../components/Banner/Banner';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

export default function Projects(){
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg"/>
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}