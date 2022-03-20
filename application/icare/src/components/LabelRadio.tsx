import React, { FC } from "react";
import styled from 'styled-components/native';
import { RadioButton } from 'react-native-paper';

interface RadioAndroidProps {
    title: string,
    label1: string
    label2: string
}

const RadioArea = styled.View`
    margin-bottom: 12px;
`;

const RadioLabelArea = styled.Text`
    margin: 16px 0 12px 0;
    font-size: 16px;
`;

const RadioBox = styled.TouchableOpacity`
    flex-direction: row;
`;

const RadioOption = styled.TouchableOpacity`
    flex-direction: row;
`;

const RadioLabel = styled.View`
    justify-content: center;
    align-items: center;
`;

const RadioLabelText = styled.Text`
    font-size: 16px;
    margin: 0 24px 0 6px;
`;

const RadioAndroid: FC<RadioAndroidProps> = (props) => {
    const [checked, setChecked] = React.useState('label1');

    return (
        <RadioArea>
            <RadioLabelArea>
                {props.title}
            </RadioLabelArea>
            <RadioBox>
                <RadioOption 
                    onPress={() => setChecked('label1')}>
                    <RadioButton.Android
                        value="label1"
                        status={ checked === 'label1' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('label1')}
                        color="#AEC4BA"
                    />
                    <RadioLabel>
                        <RadioLabelText>{props.label1}</RadioLabelText>
                    </RadioLabel>
                </RadioOption>
                <RadioOption 
                    onPress={() => setChecked('label2')}>
                    <RadioButton.Android
                        value="label2"
                        status={ checked === 'label2' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('label2')}
                        color="#AEC4BA"
                    />
                    <RadioLabel>
                        <RadioLabelText>{props.label2}</RadioLabelText>
                    </RadioLabel>
                </RadioOption>
            </RadioBox>
        </RadioArea>
    );
};
export default RadioAndroid;