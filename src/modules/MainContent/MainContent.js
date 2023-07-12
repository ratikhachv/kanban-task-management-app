// css
import './MainContent.css'

// components
import MainContentEmpty from './components/MainContentEmpty'
import MainContentFull from './components/MainContentFull/MainContentFull'



export default function MainContent(props) {
  return (
    props.selectedBoard ? <MainContentFull {...props}/> : <MainContentEmpty/>
  )
}
