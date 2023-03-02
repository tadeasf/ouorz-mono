import { KbarListItem } from '../Kbar'
import { useHotkeys } from 'react-hotkeys-hook'

/**
 *  Helper component to use react-hotkeys-hook to register hotkeys
 *  for Kbar list items
 *
 * @param {{ item: KbarListItem }} { item }
 * @return {*}
 */
const HotkeyHelper = ({ item }: { item: KbarListItem }) => {
	useHotkeys(
		`shift+${item.shortcut.join('+')}`,
		() => {
			item.action()
		},
		{
			preventDefault: true,
			enableOnFormTags: ['INPUT'],
		}
	)
	// render nothing
	return null
}

export default HotkeyHelper
