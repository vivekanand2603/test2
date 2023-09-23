import { Button, Paragraph, YStack, Input, Checkbox, Text, XStack, H1, H3, H2 } from '@my/ui'
import { Check } from '@tamagui/lucide-icons'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import { questions } from '@my/ui/src/questions'
export function UserDetailScreen() {
  const [formData, setFormData] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState('q1'); // Start with the first question
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChangeText = (event,label) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: {
        ...formData[name],
        [label] : value
    } });
  };
  const currentQuestionData = questions[currentQuestion];
  const handleSubmit = (event) => {
    event.preventDefault();
    if(currentQuestionData?.options[0]['follow-up']) {
      setCurrentQuestion(currentQuestionData.options[0]['follow-up']);
    } else {
      setCurrentQuestion('');
      fetch("/api/budget", {
        method: "POST",
        body: JSON.stringify({ 
           ...formData
         }),
        headers: {
        "Content-Type": "application/json",
        },
         }).then(console.log)
    }
  };
  const link = useLink({
    href: '/',
  })

  return (
    currentQuestion === '' ? <YStack f={1} jc="flex-start" ai="flex-start" space paddingTop={'$15'} paddingHorizontal={'$8'}>
    <H1 alignItems='center'>Thanks for your response !!</H1>
    <H2 alignItems='center'>We will reach out to you in 24 Hrs :)</H2>
  </YStack>:<YStack f={1} jc="flex-start" ai="flex-start" space paddingTop={'$15'} paddingHorizontal={'$8'}>
    <H1 alignItems='center'>{currentQuestionData.title}</H1>
    {currentQuestionData.options.map((option,index) => (
        <div key={index}>
          {option.type === 'text' ? (
            <Input
              key={option.label}
              placeholder={option.label}
              defaultValue=''
              onChange={(e)=>handleInputChangeText(e,option.label)}
            />
          ) : (
            <XStack f={1} jc="flex-start" ai="flex-start" space >
              <Checkbox size="$7" onPress={() => {
                  setFormData({ ...formData, [currentQuestion]: option.answer });
                  setCurrentQuestion(option['follow-up']);
                }} checked={false} key={option.label}>
              <Checkbox.Indicator>
                <Check />
              </Checkbox.Indicator>
            </Checkbox>
            <H3>
            {option.label}
            </H3>
            </XStack>
          )}
        </div>
      ))}
      <Button onPress={()=>{
        if(currentQuestionData?.options[0]['follow-up']) {
          setCurrentQuestion(currentQuestionData.options[0]['follow-up']);
        } else {
          setCurrentQuestion('');
          console.log(formData)
          fetch("https://reachify.marketing/api/budget", {
            method: "POST",
            body: JSON.stringify({ 
               ...formData
             }),
            headers: {
            "Content-Type": "application/json",
            },
             }).then(console.log)
        }
      }}>Next</Button>
  </YStack>
  )
}
