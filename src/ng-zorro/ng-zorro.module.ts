/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';

/*================ ICONS ================*/
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

/*================ MODULE COMPONENTS ================*/
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';


/*================ CONST ICONS ================*/

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

const NG_ZORRO_COMPONENTS = [
  NzCardModule,
  NzInputModule,
  NzFormModule,
  NzButtonModule,
  NzIconModule,
  NzDividerModule
];

@NgModule({
  imports: [...NG_ZORRO_COMPONENTS],
  exports: [...NG_ZORRO_COMPONENTS],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class NgZorroModule {}
