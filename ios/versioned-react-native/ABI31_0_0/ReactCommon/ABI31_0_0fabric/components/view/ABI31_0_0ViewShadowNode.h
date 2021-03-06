/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <ABI31_0_0fabric/ABI31_0_0components/view/ViewProps.h>
#include <ABI31_0_0fabric/ABI31_0_0components/view/ConcreteViewShadowNode.h>

namespace facebook {
namespace ReactABI31_0_0 {

extern const char ViewComponentName[];

using ViewShadowNode =
  ConcreteViewShadowNode<
    ViewComponentName,
    ViewProps,
    ViewEventEmitter
  >;

} // namespace ReactABI31_0_0
} // namespace facebook
