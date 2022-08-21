import Footer from '../components/footer'
import NavBar from '../components/navbar'
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ color:"#53b89e"});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [progress, setProgress] = useState(0);
  useEffect(()=>{
    router.events.on('routerChangeComplete',()=>{
      setProgress(100);
      console.log(progress)
    })
    
  })
  return <>
  <NavBar />
  <Component {...pageProps} />
  <Footer />
  </>
}

export default MyApp
