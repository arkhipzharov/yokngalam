# YokNgalam

This is a fully adaptive test task website made with
[tachyons](http://tachyons.io) in 3 days. Live preview of result available
[here](https://arkhipzharov.github.io/yokngalam/)

## 📥 Setup

1. `git clone https://github.com/arkhipzharov/yokngalam`
2. `npm i`
3. `git worktree add dist gh-pages`

> Type checking for all files is launched along with commands
> `npm run build` and `npm run dev`

## 👷‍♂ Development

`npm run dev`

## 🌐 Production

> You can read more about this approach
[here](https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7)

1. `npm run build`
2. `cd dist`
3. `git add .`
4. `git commit`
5. `git push origin gh-pages`
6. wait a bit and check updates [here](https://arkhipzharov.github.io/yokngalam/)

## Other

- If you meet problems refreshing globally imported scss files or svg sprite cache reload webpack
- Files for debugging are in `.` folder inside chrome dev tools
