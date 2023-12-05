import { getWordPressModule } from './wordpress/get-wordpress-module';
export { getWordPressModule };
import SupportedWordPressVersions from './wordpress/wp-versions.json';

export { SupportedWordPressVersions };
export const SupportedWordPressVersionsList = Object.keys(
	SupportedWordPressVersions
) as any as string[];
export const LatestSupportedWordPressVersion =
	SupportedWordPressVersionsList.filter((v) => v.match(/^\d/))[0] as string;

export const RecommendedPHPVersion = '8.0';

export function Test() {
	return 'Test';
}