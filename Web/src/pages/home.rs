use yew::prelude::*;
use crate::components::menu::menu_button_list::MenuButtonList;

pub enum MsgHome {
}

pub struct HomePage {
    // `ComponentLink` is like a reference to a component.
    // It can be used to send messages to the component
    _link: ComponentLink<Self>
}

impl Component for HomePage {
    type Message = MsgHome;
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        HomePage {
            _link
        }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        // Should only return "true" if new properties are different to
        // previously received properties.
        // This component has no properties so we will always return "false".
        false
    }

    fn view(&self) -> Html {
        html! {
            <div class="grid grid-cols-2 w-screen h-screen">
                <div class="bg-red-400 row-span-2" />
                <div id="about-text" class="bg-grey-400">
                    <h1 class="text-6xl font-bold p-8">{"Gabriel feliciano"}</h1>
                </div>
                <div class="bg-blue-400">
                    <MenuButtonList>
                    <MenuButtonList/>
                </div>
            </div>
        }
    }
}