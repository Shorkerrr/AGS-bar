import app from "ags/gtk4/app"
import {Gtk, Gdk, Astal} from "ags/gtk4"
import {createPoll} from "ags/time"

export default function Bar(monitor = 0) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor
  const clock = createPoll("", 60000, "date +%H:%M")
  const hyprland = Hyprland.get_default()

  return (
  <window 
      visible
      name="bar"
      class="Bar"
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={TOP | LEFT | RIGHT}
      >

    <button 
        halign={Gtk.Align.CENTER}
      >
    <label
        label={clock} 
        halign={Gtk.Align.CENTER}
        />
</button>
  </window>

  
  )
}

