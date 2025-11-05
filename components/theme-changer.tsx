'use client'

import 'server-only'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function ThemeChanger() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
	size='sm'
	variant='ghost'
	onClick={() => {
	    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
	}}
    >
	{resolvedTheme === 'dark' ? (
	    <SunIcon className='size-4 text-orange-300' />
	) : (
	    <MoonIcon className='size-4 text-sky-950' />
	)}

	<span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
