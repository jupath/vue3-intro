<template>
  <div>
    <div v-for="(book, index) in books" :key="index">
      Title: {{ book.title }} - {{ book.author }}
    </div>
  </div>
</template>

<script>
const getBooks = async () => {
  // wait 3 seconds to mimic API call
  await new Promise(resolve => setTimeout(resolve, 3000))

  const books = [
    {
      title: 'Foundation',
      author: 'Isaac Asimov'
    },
    {
      title: 'Foundation and Empire',
      author: 'Isaac Asimov'
    },
    {
      title: 'Second Foundation',
      author: 'Isaac Asimov'
    }
  ]

  return books
}

export default {
  name: 'Books',
  async setup () {
    const books = await getBooks()
    
    return { books }
  }
}
</script>