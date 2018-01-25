import { Common } from './ebook.common';

export class EBookReader extends Common {
  public open(filePath: string) {
    // let bookPath = NSBundle.mainBundle().pathForResourceOfType(filePath, 'epub');
    // FolioReader.presentReaderWithParentViewControllerWithEpubPathAndConfigShouldRemoveEpubAnimated(
    //     topmost().currentPage.ios,
    //     bookPath,
    //     this._config,
    //     false,
    //     true
    // );
  }
}
