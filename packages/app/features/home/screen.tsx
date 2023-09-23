import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/signup',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Reachify.</H1>
        <Paragraph ta="center">
        Step into the Future of Marketing Excellence: Embrace the Challenge, Elevate Your Business, and Witness Unprecedented Growth. With our cutting-edge solutions, it helps you conquer the digital landscape and achieve extraordinary results!
        </Paragraph>

        <Separator />
      </YStack>

      <XStack>
        <Button {...linkProps}>Get your customized bugget today</Button>
      </XStack>
    </YStack>
  )
}