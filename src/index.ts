let b = 'hello' as 'hi' | 'how are you'

const form = {
  label: 'label',
  input: 'input' as 'input' | 'hi' | 'how are you',
}

form.input = 'how are you'

const input = document.querySelector('#data') as HTMLInputElement
