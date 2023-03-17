import MainHeader from "./MainHeader";

function Layout(props) {
    return (
        <>
          <main>
            <MainHeader />
            {props.children}
          </main>
        </>
    );
}

export default Layout;