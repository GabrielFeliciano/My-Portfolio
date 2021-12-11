use yew::prelude::*;
use std::borrow::Cow;

#[derive(Clone, PartialEq)]
pub struct AnchorDto {
    pub href: Cow<'static, str>,
    pub text: String,
}

#[derive(Properties, Clone)]
pub struct ButtonListProps {
    #[prop_or_default]
    pub children: Children,
}

pub struct MenuButtonList {
    _link: ComponentLink<Self>,
    _props: ButtonListProps,
}

impl Component for MenuButtonList {
    type Message = ();
    type Properties = ButtonListProps;
    
    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        MenuButtonList { _link, _props }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        let map = |button: &AnchorDto| {
            html_nested! {
                <li>
                    <a href={&button.href}>{&button.text}</a>
                </li>
            }
        };

        html! {
            <ul>
                { self._props.buttons.iter().map(map).collect::<Vec<Html>>() }
            </ul>
        }
    }
}