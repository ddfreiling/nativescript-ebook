
declare class FRBook extends NSObject {

	static alloc(): FRBook; // inherited from NSObject

	static new(): FRBook; // inherited from NSObject
}

declare class FRResource extends NSObject {

	static alloc(): FRResource; // inherited from NSObject

	static new(): FRResource; // inherited from NSObject
}

declare class FRResources extends NSObject {

	static alloc(): FRResources; // inherited from NSObject

	static new(): FRResources; // inherited from NSObject
}

declare class FRTocReference extends NSObject {

	static alloc(): FRTocReference; // inherited from NSObject

	static new(): FRTocReference; // inherited from NSObject
}

declare class FolioReader extends NSObject {

	static alloc(): FolioReader; // inherited from NSObject

	static new(): FolioReader; // inherited from NSObject

	saveReaderState(): void;
}

declare class FolioReaderAudioPlayer extends NSObject {

	static alloc(): FolioReaderAudioPlayer; // inherited from NSObject

	static new(): FolioReaderAudioPlayer; // inherited from NSObject

	audioPlayerDidFinishPlayingSuccessfully(player: AVAudioPlayer, flag: boolean): void;

	speechSynthesizerDidCancelSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;

	speechSynthesizerDidFinishSpeechUtterance(synthesizer: AVSpeechSynthesizer, utterance: AVSpeechUtterance): void;
}

declare class FolioReaderCenter extends UIViewController implements FolioReaderPageDelegate, UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {

	static alloc(): FolioReaderCenter; // inherited from NSObject

	static new(): FolioReaderCenter; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSpringLoadItemAtIndexPathWithContext(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	pageDidLoad(page: FolioReaderPage): void;

	pageTap(recognizer: UITapGestureRecognizer): void;

	pageWillLoad(page: FolioReaderPage): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface FolioReaderCenterDelegate {

	htmlContentForPageHtmlContent?(page: FolioReaderPage, htmlContent: string): string;

	pageDidAppear?(page: FolioReaderPage): void;

	pageItemChanged?(pageNumber: number): void;
}
declare var FolioReaderCenterDelegate: {

	prototype: FolioReaderCenterDelegate;
};

declare class FolioReaderConfig extends NSObject {

	static alloc(): FolioReaderConfig; // inherited from NSObject

	static new(): FolioReaderConfig; // inherited from NSObject
}

declare class FolioReaderContainer extends UIViewController {

	static alloc(): FolioReaderContainer; // inherited from NSObject

	static new(): FolioReaderContainer; // inherited from NSObject
}

interface FolioReaderDelegate {

	folioReaderDidClose?(folioReader: FolioReader): void;

	folioReaderDidClosed?(): void;

	folioReaderDidFinishedLoading?(folioReader: FolioReader, book: FRBook): void;
}
declare var FolioReaderDelegate: {

	prototype: FolioReaderDelegate;
};

declare var FolioReaderKitVersionNumber: number;

declare var FolioReaderKitVersionNumberVar: number;

declare var FolioReaderKitVersionString: interop.Reference<number>;

declare var FolioReaderKitVersionStringVar: interop.Reference<number>;

declare class FolioReaderPage extends UICollectionViewCell implements UIGestureRecognizerDelegate, UIWebViewDelegate {

	static alloc(): FolioReaderPage; // inherited from NSObject

	static appearance(): FolioReaderPage; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FolioReaderPage; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FolioReaderPage; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FolioReaderPage; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FolioReaderPage; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FolioReaderPage; // inherited from UIAppearance

	static new(): FolioReaderPage; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	handleTapGesture(recognizer: UITapGestureRecognizer): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewDidFailLoadWithError(webView: UIWebView, error: NSError): void;

	webViewDidFinishLoad(webView: UIWebView): void;

	webViewDidStartLoad(webView: UIWebView): void;

	webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;
}

interface FolioReaderPageDelegate {

	pageDidLoad?(page: FolioReaderPage): void;

	pageTap?(recognizer: UITapGestureRecognizer): void;

	pageWillLoad?(page: FolioReaderPage): void;
}
declare var FolioReaderPageDelegate: {

	prototype: FolioReaderPageDelegate;
};

declare class FolioReaderWebView extends UIWebView {

	static alloc(): FolioReaderWebView; // inherited from NSObject

	static appearance(): FolioReaderWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FolioReaderWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FolioReaderWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): FolioReaderWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FolioReaderWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): FolioReaderWebView; // inherited from UIAppearance

	static new(): FolioReaderWebView; // inherited from NSObject
}

declare class Highlight {

	static primaryKey(): string;

	bookId: string;

	content: string;

	contentPost: string;

	contentPre: string;

	date: Date;

	endOffset: number;

	highlightId: string;

	page: number;

	startOffset: number;

	type: number;

	constructor();

	constructor(o: { realm: any; schema: any; });

	constructor(o: { value: any; schema: any; });

	init(): this;

	initWithRealmSchema(realm: any, schema: any): this;

	initWithValueSchema(value: any, schema: any): this;
}
