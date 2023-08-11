<?php

namespace ReactPluginStarter;

/**
 * Class InitPluginStarter
 */
class InitPlugin {
  private $reactApp;

  public function __construct() {
    $this->initReactApp();
  }

  private function initReactApp() {
    $this->reactApp = new ReactApp();
  }
}
