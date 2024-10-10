import { Control, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";
import { signInSchema, signUpSchema } from "@/types/schema";
import { View, Text } from "react-native";

type HooksInputsProps = {
    control: Control<any>
    name:  "email" | "firstName" | "lastName" | "password" | "confirmPassword", 
    label: string,
    error: signUpSchema | signInSchema | undefined
    errMessage: string
    otherStyle?: string
}

export function RHFInputs({
    control,
    name,
    label,
    error,
    errMessage,
    otherStyle,
    ...rest
}: HooksInputsProps){
    return(
        <View className={otherStyle}>
            <Controller 
                control={control}
                // rules={{ required: true }}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                <TextInput 
                    mode='outlined' 
                    label={label}
                    className='bg-white font-outfit-regular text-neutral-950'
                    activeOutlineColor='#0a0a0a'
                    outlineColor="#404040"
                    textColor='#0a0a0a'
                    error={!!error}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={name == 'password' ? true : name == 'confirmPassword'? true : false}
                    style ={{height: 48, }}
                    outlineStyle={{borderRadius: 12}}
                    {...rest}
                />
                )}
            />
            {error && <Text className="text-xs text-rose-500">{ errMessage }</Text>}
        </View>
    )
}