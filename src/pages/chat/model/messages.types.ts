export type Message = {
	sender: 'User' | 'Bot'
	text: string
	time: string
} & (
	| {
			sender: 'Bot'
			options?: string[]
	  }
	| {
			sender: 'User'
			options?: never
	  }
)
