import app from "ags/gtk4/app"
import Bar from "./widget/Bar"
import style from "./style.scss"

app.start({
  css: style,
  main() {
    app.get_monitors().map(Bar)
  },
})
