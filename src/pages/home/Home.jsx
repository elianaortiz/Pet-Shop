import Main from "../../components/Main/Main";
import Categories from "../../components/Categories/Categories";
import Popular from "../../components/Popular/Popular";
import Form from "../../components/Form/Form";

function Home() {
    return(
        <div>
            <Main/>
            <Categories/>
            <Popular/>
            <Form/>
        </div>
    )
}

export default Home;