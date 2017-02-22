# micro-write-good

> A microservice to proofread your texts.

[this sentence was written really carefully to make sure it has no errrors](https://micro-write-good-qssvkqadji.now.sh/?text=this%20sentence%20was%20written%20really%20carefully%20to%20make%20sure%20it%20has%20no%20errrors)

## Deployment

Your own `micro-write-good` is one click away:

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/mathdroid/micro-write-good)

You can also deploy with a single command from the terminal (assuming you have [`now`](https://now.sh) installed):

```sh
now mathdroid/micro-write-good
```

## Usage

To get the suggestion for any text, for example, `'the quick brown fox jumps over the lazy dog'`, you need to pass it to a `text` query parameter (url encoded):

```sh
https://your-url.now.sh/?text=the%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog
```

And you will get the parsed data in the following format:

```JSON
{
"text": "the quick brown fox jumps over the lazy dog",
"suggestions": [ ],
"typos": [ ]
}
```

## License

The MIT License (MIT)
Copyright (c) 2017 Muhammad Mustadi
