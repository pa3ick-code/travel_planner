import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';

type IconsProp = {
    color: string,
    focused: boolean
}

export const icons = {
    Octicons,
}

// Tab icons
export const  plane = ({color, focused}: IconsProp)=> (
    <MaterialCommunityIcons name="airplane" size={30} color={focused? color : 'black'} />
);

export const explore = ({ color, focused }: IconsProp)=>(
    <Fontisto name="world" size={30} color={focused? color : 'black'} />
);

export const user = ({ color, focused }: IconsProp)=>(
    <FontAwesome6 name="user-large" size={30} color={focused? color : 'black'} />
);
