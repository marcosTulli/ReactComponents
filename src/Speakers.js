import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { SpeakerFilterProvider} from "./context/SpeakersFilterContext";


function Speakers() {
    
    
    return (
        <SpeakerFilterProvider startingShowSessions={false}>
            <SpeakersToolbar />
            <SpeakersList/>
        </SpeakerFilterProvider>
    );
}

export default Speakers;